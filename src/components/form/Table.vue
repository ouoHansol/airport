<template>
    <table class="table-container">
        <thead class="table-header">
            <tr>
                <th v-for="header in headers" :key="header">{{ header }}</th>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr>
                <td>
                    <span>
                        <input type="checkbox" />
                    </span>
                </td>
                <td>1</td>
                <td>제1작업표준</td>
                <td>시설시설</td>
                <td>재정완료</td>
                <td>2025-09-11</td>
                <td><span><Button name="개정하기" width="4rem"></Button></span></td>
                <td><span><Button name="목록확인" width="4rem"></Button></span></td>
                <td>
                    <span>
                        <Button name="복사" color="primary"/>
                        <Button name="삭제" color="danger"/>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import Button from '@/components/form/Button.vue';
import { DEFAULT_HEADERS } from '@/config/tableHeaders';
// 에러 원인: 파일명 오타 (TABEL_HEADERS → tableHeaders) 또는 경로 대소문자 불일치

// Props
interface Props {
  headers?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  headers: () => DEFAULT_HEADERS
})
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
    font-size: 12px;
    flex-direction: row;
}

span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
}

</style>
