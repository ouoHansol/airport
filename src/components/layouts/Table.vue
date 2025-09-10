<template>
    <table class="table-container">
        <thead class="table-header">
            <tr>
                <th></th>
                <th>No</th>
                <th>점검그룹번호</th>
                <th>항목번호</th>
                <th>주기</th>
                <th>점검코드</th>
                <th>점검항목</th>
                <th>점검방법</th>
                <th>시행여부</th>
                <th></th>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td><Button name="삭제" color="danger"/></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import Button from '@/components/layouts/Button.vue';
</script>

<style scoped>

.table-container{
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 100%;
    margin: 0.5rem;
}

.table-header{
    background-color: #f5f5f5;
    
}

.table-body{
    background-color: #fff;
}

tr{
    border: 1px solid #ccc;
}

th, td{
    padding: 5px 5px;
    text-align: center;
    border: 1px solid #ccc;
    width: 120px;
    height: 48px;
    font-size: 12px;
    box-sizing: border-box;
}

th{
    font-weight: bold;
    background-color: #f8f9fa;
}

td{
    background-color: #fff;
}

</style>
