<template>
  <header :class="[{ desktop : isDesktop}, 'site-header']">
    <label v-if="!isDesktop" for="show-navigation" class="button--icon no-hover fa fa-bars">Menu</label>
    <a href="#" class="header-brand">Home</a>
    <site-menu v-if="isDesktop">
      <div class="placeholder"></div>
      <site-navigation></site-navigation>
      <site-search></site-search>
    </site-menu>
    <label v-if="!isDesktop" for="show-search" class="button--icon right no-hover fa fa-search">Search</label>
  </header>
</template>

<script>
export default {
  name: 'site-header',
  computed: {
    isDesktop() {
      return this.$store.getters.isDesktop;
    }
  }
};
</script>

<style lang="less">
@import "../styles/theme.less";
@import "../styles/util/media-queries.less";

.site-header {
  background: @site-header-background-colour;
  border-bottom: none;
  border-top: none;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: @site-header-height;
  margin: 0 auto auto;
  padding: 0 16px;
  position: relative;
  top: 0;
  transition: transform 0.5s ease-out;
  width: 100%;
  z-index: 100;
  box-shadow: @site-header-box-shadow;

  &.fixed {
    position: fixed;
  }

  @media @800 {
    height: @site-header-height--800;
    padding: 0 24px;
  }

  .header-brand {
    width: 75px;
    text-align: center;
    text-indent: -9999px;
    background: url("assets/images/logo.png") center center no-repeat;
    background-size: auto 85%;

    @media @800 {
      width: 100px;
    }
  }

  .button--icon {
    cursor: pointer;
    left: 8px;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    color: @site-header-icon-button-font-colour;
    background: @site-header-icon-button-background-colour;

    @media @1040 {
      .desktop& {
        display: none;
      }
    }

    &.right {
      left: auto;
      right: 8px;
    }

    &.fa-search:before {
      #show-search:checked ~ & {
        content: "\f00d";
      }
    }

    &.fa-bars:before {
      #show-navigation:checked ~ & {
        content: "\f00d";
      }
    }
  }
}
</style>
