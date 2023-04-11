<!-- eslint-disable import/no-duplicates -->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'

const emit = defineEmits(['activateNextStep'])

const {
  getAppointments,
  isLoadingAppointments,
  getSelectedTimeZone,
  isCheckingAvailability,
  appointErr,
} = storeToRefs(appointmentsStore)

const { fetchAppointments } = appointmentsStore
const today = startOfToday()
const getFreshAppointments = async (date: number | Date) => {
  await fetchAppointments({
    timezone: getSelectedTimeZone.value,
    date: format(date, 'yyyy-MM-dd'),
  })
}
await getFreshAppointments(today)

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

const selectedDay = ref(today)

const selectedDayMeetings = ref(
  getAppointments.value.filter((meeting) =>
    isSameDay(parseISO(meeting.d), selectedDay.value)
  )
)
const setSelectedDay = (date: Date) => {
  selectedDay.value = date
  selectedDayMeetings.value = getAppointments.value.filter((meeting) =>
    isSameDay(parseISO(meeting.d), selectedDay.value)
  )
  document.getElementById('select-appointment')?.scrollIntoView(false)
}
const currentMonth = ref(format(selectedDay.value, 'MMM-yyyy'))
const firstDayCurrentMonth = ref(
  parse(currentMonth.value, 'MMM-yyyy', new Date())
)

const days = ref({
  value: eachDayOfInterval({
    start: firstDayCurrentMonth.value,
    end: endOfMonth(firstDayCurrentMonth.value),
  }),
})

const setCurrentMonth = (date: string) => {
  currentMonth.value = date
  firstDayCurrentMonth.value = parse(currentMonth.value, 'MMM-yyyy', new Date())
  days.value = ref(
    eachDayOfInterval({
      start: firstDayCurrentMonth.value,
      end: endOfMonth(firstDayCurrentMonth.value),
    })
  )
}

const previousMonth = async () => {
  const firstDayPreviousMonth = add(firstDayCurrentMonth.value, { months: -1 })
  setCurrentMonth(format(firstDayPreviousMonth, 'MMM-yyyy'))

  await getFreshAppointments(firstDayPreviousMonth)
}

const nextMonth = async () => {
  const firstDayNextMonth = add(firstDayCurrentMonth.value, { months: 1 })
  setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))

  await getFreshAppointments(firstDayNextMonth)
}

const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ')
</script>

<template>
  <div class="relative">
    <OverlayLoader v-if="isCheckingAvailability" />
    <TheSkeleton v-if="isLoadingAppointments" height-class="h-10" />
    <div v-else class="pt-8">
      <div class="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div class="md:grid md:grid-cols-2 md:divide-s md:divide-gray-200">
          <div class="md:pe-14">
            <div class="flex items-center justify-between">
              <button
                type="button"
                class="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                :class="[$i18n.locale === 'ar' ? 'transform rotate-180' : '']"
                @click="previousMonth"
              >
                <span class="sr-only">Previous month</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-black"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <h2 class="font-semibold text-gray-900">
                {{ format(firstDayCurrentMonth, 'MMMM yyyy') }}
              </h2>
              <button
                type="button"
                class="-my-1.5 -me-1.5 ms-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                :class="[$i18n.locale === 'ar' ? 'transform rotate-180' : '']"
                @click="nextMonth"
              >
                <span class="sr-only">Next month</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-black"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              class="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500"
            >
              <div>{{ $t('su') }}</div>
              <div>{{ $t('mo') }}</div>
              <div>{{ $t('tu') }}</div>
              <div>{{ $t('we') }}</div>
              <div>{{ $t('th') }}</div>
              <div>{{ $t('fr') }}</div>
              <div>{{ $t('sa') }}</div>
            </div>
            <div class="grid grid-cols-7 mt-2 text-sm">
              <div
                v-for="(day, dayIdx) in days.value"
                :key="day.toString()"
                :class="
                  classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )
                "
              >
                <button
                  type="button"
                  :disabled="isBefore(day, today)"
                  :class="
                    classNames(
                      isBefore(day, today) && 'disabled text-gray-300',
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-primary',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        getAppointments.some((meeting) =>
                          isSameDay(parseISO(meeting.d), day)
                        ) &&
                        'text-primary',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        !getAppointments.some((meeting) =>
                          isSameDay(parseISO(meeting.d), day)
                        ) &&
                        'text-primary' &&
                        'text-gray-600',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-primary',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-primary/70',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      getAppointments.some((meeting) =>
                        isSameDay(parseISO(meeting.d), day)
                      ) && 'text-white',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )
                  "
                  @click="setSelectedDay(day)"
                >
                  <time :dateTime="format(day, 'yyyy-MM-dd')">
                    {{ format(day, 'd') }}
                  </time>
                </button>
              </div>
            </div>
          </div>
          <section class="mt-12 mb-6 lg:mb-0 md:mt-0">
            <h2 class="text-sm font-semibold text-gray-900 md:px-14">
              {{
                $t('appointments.bookOn', {
                  date: format(startOfToday(), 'EEEE'),
                })
              }}
              <time :dateTime="format(selectedDay, 'yyyy-MM-dd')">
                {{ format(selectedDay, 'MMM dd, yyy') }}
              </time>
            </h2>
            <ScheduledAppointment
              v-if="selectedDayMeetings.length"
              :appointments="selectedDayMeetings"
              :class-names="classNames"
              @activate-next-step="emit('activateNextStep')"
            />
            <p v-else class="mt-4 tracking-wider text-gray-400 md:px-14">
              {{ $t('appointments.noMeetings') }}
            </p>
          </section>
          <div v-if="appointErr.staff_id?.length > 0">
            <p
              v-for="err of appointErr.staff_id"
              :key="err"
              class="text-red-600 text-base font-semibold block"
            >
              {{ err }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
