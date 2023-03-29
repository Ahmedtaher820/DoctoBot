
<script lang="ts" setup>

</script>

<template>
    <Auth>
        <template #left-part>
            <div class="flex flex-col justify-start items-start px-16">
                <div class="logo py-3 px-6 second-bg"></div>
                <h2 class="text-3xl my-6">Create an account</h2>
                <form class="w-full flex flex-col gap-5">
                    <div class="form-field email basis-1/2">
                        <input type="text" class="w-full" placeholder=" " name="uname" required />
                        <label>Email</label>
                    </div>
                    <div class="form-field pass">
                        <input type="text" class="w-full" placeholder=" " required>
                        <label>Phone Number</label>
                    </div>
                    <div class="form-field pass">
                        <input type="email" class="w-full" placeholder=" " required>
                        <label>Email</label>
                    </div>
                    <div class="form-field pass">
                        <input type="password" class="w-full" placeholder=" " required>
                        <label>Password</label>
                    </div>
                    <base-button type="submit" class="mt-4">
                    Create An Account    
                </base-button>
                </form>
            </div>
        </template>
        <template #right-part>
            dd
        </template>
    </Auth>
</template>

<style>
.form-field {
    position: relative;
}

.form-field label {
    position: absolute;
    left: 8px;
    top: 8px;
    transition: all 0.3s ease;
    z-index: -2;
    font-size: 16px;
}

.form-field input {
    background-color: transparent;
    padding: 8px;
    @apply border-b border-textColor;
}

.form-field input:focus+label,
input:not(:placeholder-shown)~label {
    top: -10px;
    left: 0;
    font-size: 12px;
}

input:focus {
    outline: none;

}
</style>