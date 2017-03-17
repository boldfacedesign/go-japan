<template>
  <nav class="site-navigation">
    <ul class="no-bullet">
      <li class="home">
        <router-link to="/" class="fa fa-home">Home</router-link>
      </li>
      <li class="food">
        <router-link to="/food" class="fa fa-book">Food</router-link>
      </li>
      <li class="travel">
        <router-link to="/travel" class="fa fa-book">Travel</router-link>
      </li>
      <li class="culture">
        <router-link to="/culture" class="fa fa-book">Culture</router-link>
      </li>
      <li class="history">
        <router-link to="/history" class="fa fa-book">History</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'site-navigation'
};
</script>

<style lang="less">
@import "../styles/theme.less";
@import "../styles/util/media-queries.less";

.site-navigation {
  li {
    border-bottom: 1px solid @site-nav-item-border-color;

    a {
      font-family: @site-nav-font;
      font-size: @site-nav-font-size;
      color: @site-nav-font-color;
      font-weight: @site-nav-font-size-weight;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 16px;
      height: 48px;

      &:before {
        font-family: FontAwesome;
        display: inline-block;
        font-size: @h5;
        color: currentColor;
        vertical-align: top;
        margin-right: 8px;
        width: 32px;
        text-align: initial;
      }

      @media @800 {
        height: 56px;
        padding: 0 24px;
        font-size: @site-nav-font-size--800;

        &:hover {
          color: @site-nav-font-color-hover;
        }
      }

      &:active,
      .selected& {
        color: @site-nav-font-color-active;
      }
    }
  }

  .site-header & {
    flex-grow: 1;
    order: 3;
    flex-basis: 50%;
    padding: 0 3%;
    display: flex;

    ul {
      display: flex;
      flex-direction: row;

      li {
        border: none;
        display: flex;

        &.non-desktop {
          display: none;
        }

        a {
          display: flex;
          align-items: center;
          font-weight: @site-nav-font-size-weight-desktop;
          padding: 0 16px;

          @media @800 {
            height: @site-header-height--800;
          }

          &:before {
            display: none;
          }
        }
      }
    }
  }
}
</style>
