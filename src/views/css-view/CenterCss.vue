<script setup>
  const flexContent =`
  .flex-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }`
  const positionContent = `
  .position-container {
      position: relative;
      .div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }`
  const gridContent = `
  .grid-container {
      display: grid;
      place-content: center;
    }`
</script>

<template>
  <div class="container-center" id="center">
    <el-tooltip popper-class="center" :content="flexContent" placement="bottom" effect="customized">
      <el-card class="box-container">
        <div>flex 布局</div>
        <div class="flex-container box">
          <div class="div"></div>
        </div>
      </el-card>
    </el-tooltip>
    <el-tooltip popper-class="center" :content="positionContent" placement="bottom" effect="customized">
      <el-card class="box-container">
        <div>定位居中</div>
        <div class="position-container box">
          <div class="div">
          </div>
        </div>
      </el-card>
    </el-tooltip>
    <el-tooltip popper-class="center" :content="gridContent" placement="bottom" effect="customized">
      <el-card class="box-container">
        <div>网格居中</div>
        <div class="grid-container box">
          <div class="div"></div>
        </div>
      </el-card>
    </el-tooltip>
  </div>
</template>

<style lang="scss">
  .center.is-customized {
    /* Set padding to ensure the height is 32px */
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
  }
  .center.is-customized .el-popper__arrow::before {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
  }
</style>
<style scoped lang="scss">

  .container-center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .flex-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .position-container {
      position: relative;
      .div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .grid-container {
      display: grid;
      place-content: center;
    }
    .box-container {
      .box {
        background: #888888;
        width: 200px;
        height: 200px;
      }
      .div {
        width: 100px;
        height: 100px;
        background: #eee;
      }
    }
  }

</style>