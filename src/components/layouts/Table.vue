<template>
    <table class="table-container">
        <thead class="table-header">
            <tr>
                <th>□</th>
            </tr>
            <tr>
                <th>순번</th>
            </tr>
            <tr>
                <th>점검그룹번호</th>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr>
                <td>□</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
</script>

<style scoped>

.table-container{
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
}

.table-header{
    min-width: 3rem;
    min-height: 2rem;
    display: flex;
}
tr{
    padding: 0px 10px;
    min-width: 3rem;
    min-height: 2rem;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}
th
{
    font-size: 14px;
}

.table-body{
    min-width: 3rem;
    min-height: 2rem;
    display: flex;
}

</style>
