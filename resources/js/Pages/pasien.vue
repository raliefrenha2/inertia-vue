<template>

    <div class="container text-center">
        <h1>Hallo Inertia Vue </h1>
        <div class="row justify-content-center">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>nama</th>
                            <th>tanggal lahir</th>
                            <th>alamat</th>
                            <th>HP</th>
                            <th>dll</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pasien in pasiens" :key="pasien.id">
                            <td>{{ pasien.nama }}</td>
                            <td>{{ pasien.tanggal_lahir }}</td>
                            <td>{{ pasien.alamat }}</td>
                            <td>{{ pasien.no_hp }}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    props: {
        pasiens: Array
    }
}
</script>
