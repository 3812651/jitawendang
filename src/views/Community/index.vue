<template>
  <div class="community_body">
    <v-header></v-header>
    <div class="community_box">
      <Card class="card">
        <Menu mode="horizontal" active-name="1">
          <MenuItem name="1">
            <Icon type="md-bonfire" />
            热门
          </MenuItem>
          <MenuItem name="2">
            <Icon type="md-alarm" />
            最新
          </MenuItem>
        </Menu>
        <div class="item">
          <div class="context-box">
            <div class="info-box">
              <div class="meta-row">
                <ul class="meta-list">
                  <li class="username">D2前端技术论坛</li>
                  <li class="date">14天前</li>
                </ul>
              </div>
              <div class="info-row">
                <div class="title">第十五届 D2 前端技术论坛</div>
                <div class="description">前端热爱，技术无界，我们云端相聚</div>
              </div>
            </div>
            <div
              data-src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image"
              class="lazy thumb thumb loaded"
              style="
                background-image: url('https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image');
                background-size: cover;
              "
            ></div>
          </div>
        </div>
        <div class="item">
          <div class="context-box">
            <div class="info-box">
              <div class="meta-row">
                <ul class="meta-list">
                  <li class="username">D2前端技术论坛</li>
                  <li class="date">14天前</li>
                </ul>
              </div>
              <div class="info-row">
                <div class="title">第十五届 D2 前端技术论坛</div>
                <div class="description">前端热爱，技术无界，我们云端相聚</div>
              </div>
            </div>
            <div
              data-src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image"
              class="lazy thumb thumb loaded"
              style="
                background-image: url('https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image');
                background-size: cover;
              "
            ></div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.item:not(:last-child) {
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
}
.context-box {
  display: flex;
  align-items: center;
  padding: 0.15rem 0.2rem;
  cursor: pointer;
  min-width: 0;
  .info-box {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .meta-row .meta-list {
      font-size: 12px;
      color: #b2bac2;
      display: flex;
      align-items: baseline;
      white-space: nowrap;
      .username:after {
        content: "·";
        margin: 0 0.4em;
        color: #b2bac2;
      }
    }
  }
  .info-row {
    .title {
      margin: 0.05rem 0 0.1rem;
      font-size: 0.16rem;
      font-weight: 600;
      line-height: 1.2;
      color: #2e3135;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .description {
      font-size: 13px;
      color: #b2bac2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .thumb {
    flex: 0 0 auto;
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.2rem;
    background-color: #fff;
    border-radius: 2px;
  }
  .thumb {
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .lazy {
    position: relative;
  }
}
.community_body {
  height: 100%;
  background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
}
.community_box {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0.8rem 1.74rem 0;
  .card {
    height: 100%;
    overflow-y: scroll;
  }
  .card::-webkit-scrollbar {
    width: 0.08rem;
    height: 0.08rem;
    background-color: #bce0f0;
  }

  .card::-webkit-scrollbar-thumb {
    background-color: #2d8cf0;
    border-radius: 0.08rem;
  }
}
</style>