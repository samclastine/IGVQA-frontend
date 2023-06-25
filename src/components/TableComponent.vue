<template>
  <el-table
    :data="csvData.data"
    height="450"
    :header-cell-style="{ background: '#323233' }"
    :row-class-name="tableRowClassName"
  >
    <el-table-column
      v-for="(header, index) in csvData.meta.fields"
      :key="index"
      :label="header"
      :prop="header"
      width="120"
      style="
         {
          background-color: rgb(36, 36, 36) !important;
        }
      "
    >
    </el-table-column>
  </el-table>
</template>
  
  <script>
import { mapGetters } from "vuex";
import { ElTable, ElTableColumn } from "element-plus";
import "element-plus/dist/index.css";

export default {
  name: "CSVTable",
  components: {
    ElTable,
    ElTableColumn,
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
    console.log(rowIndex);
      if (row.launch_success == true) {
        return "success-row";
        
      } else if (row.launch_success == false) {
        return "warning-row";
      }
      return "other-row";
    },
  },
  computed: {
    ...mapGetters(["getCSVData"]),
    csvData() {
      return this.getCSVData;
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
