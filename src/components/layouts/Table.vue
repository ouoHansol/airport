<template>
    <table class="table-container">
        <thead class="table-header">
            <tr>
                <th></th>
                <th>순번</th>
                <th>점검그룹번호</th>
                <th>점검순서</th>
                <th>항목번호</th>
                <th>주기</th>
                <th>점검코드</th>
                <th>점검항목</th>
                <th>점검방법</th>
                <th>적정기준</th>
                <th>수치/판정 구분</th>
                <th>하한치</th>
                <th>표준치</th>
                <th>하한계산식</th>
                <th>하한계산치</th>
                <th>상한계산식</th>
                <th>상한계산치</th>
                <th>상한치</th>
                <th>단위</th>
                <th>시행여부</th>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr>
                <td>□</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
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
