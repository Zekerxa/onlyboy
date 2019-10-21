<template>
    <b-container>
        <b-row class="justify-centent-center mt-5">
            <b-col class="text-center">
                <h2 class="text-danger">Server Down !</h2>
                <h4 class="mt-4 text-dark">Sorry ! Our server is not ready for this time ... </h4>
                <h5 class="mt-3 text-dark">Plz .. try again back a few hours later....</h5>
                <router-link to="/login"><b-button variant="danger" class="mt-4">Back</b-button> </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>