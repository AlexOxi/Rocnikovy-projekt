<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white" reveal>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Ročnikový projekt
        </q-toolbar-title>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
</script>
