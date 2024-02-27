<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Card from '@/Components/Card.vue';
import appLayout from '@/Layouts/AppLayout.vue';
import LogoApp from '@/Components/LogoApp.vue';
import Checkbox from '@/Components/Checkbox.vue';
import ErrorMsj from '@/Components/ErrorMsj.vue';
import Label from '@/Components/Label.vue';
import Buttons from '@/Components/Buttons.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>

<Head title="Log in" />
<appLayout>

    <Card>    
        <template #logo>
            <LogoApp />
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <Label for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class=""
                    required
                    autofocus
                    autocomplete="username"
                />
                <ErrorMsj class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <Label for="password" value="Password" />
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class=""
                    required
                    autocomplete="current-password"
                />
                <ErrorMsj class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm font-bold  text-gray-900">Remember me</span>
                </label>
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm font-bold  text-gray-900">Remember me</span>
                </label>
            </div>
            <div class="flex items-center mt-4">
                
                <Buttons class="ms-4" colorButton="primary" maxWidthButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </Buttons>
            </div>
            <div class="flex items-center">
                <Buttons colorButton="e" maxWidthButton link href="welcome" >
                    Cancelar
                </Buttons>
            </div>


        </form>
    </Card>
</appLayout>

</template>
