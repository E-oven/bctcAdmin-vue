<template>
  <div class="menu-wrapper">
    <template v-for="item in menu" v-if="item.visible == 1">
      <el-menu-item v-if="validatenull(item[childrenKey]) && vaildRoles(item)"
                    :index="item[pathKey]"
                    @click="open(item)"
                    :key="item[labelKey]"
                    :class="{'is-active':vaildActive(item)}">
        <i :class="item[iconKey]"></i>
        <span slot="title"
              :alt="item[pathKey]">{{generateTitle(item)}}</span>
      </el-menu-item>
      <el-submenu v-else-if="!validatenull(item[childrenKey])&&vaildRoles(item) && item.visible == 1" 
                  :index="item[pathKey]"
                  :key="item[labelKey]">
        <template slot="title">
          <i :class="item[iconKey]"></i>
          <span slot="title"
                :class="{'el-menu--display':collapse && first}">{{generateTitle(item)}}</span>
        </template>
        <template v-for="(child,cindex) in item[childrenKey]">
          <el-menu-item :index="child[pathKey],cindex"
                        @click="open(child)"
                        :class="{'is-active':vaildActive(child)}"
                        v-if="validatenull(child[childrenKey]) &&  child[childrenKey].visible == 1"
                        :key="child[labelKey]">
            <i :class="child[iconKey]"></i>
            <span slot="title">{{generateTitle(child)}}</span>
          </el-menu-item>
          <sidebar-item v-else
                        :menu="[child]"
                        :key="cindex"
                        :props="props"
                        :screen="screen"
                        :collapse="collapse"></sidebar-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";
  import {isURL, validatenull} from "@/util/validate";
  import config from "./config.js";

  export default {
    name: "sidebarItem",
    data() {
      return {
        config: config
      };
    },
    props: {
      menu: {
        type: Array
      },
      screen: {
        type: Number
      },
      first: {
        type: Boolean,
        default: false
      },
      props: {
        type: Object,
        default: () => {
          return {};
        }
      },
      collapse: {
        type: Boolean
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {
      ...mapGetters(["roles"]),
      labelKey() {
        return this.props.label || this.config.propsDefault.label;
      },
      pathKey() {
        return this.props.path || this.config.propsDefault.path;
      },
      iconKey() {
        return this.props.icon || this.config.propsDefault.icon;
      },
      childrenKey() {
        return this.props.children || this.config.propsDefault.children;
      },
      isOpenKey() {
        return this.props.isOpen || this.config.propsDefault.isOpen;
      },
      nowTagValue() {
        return this.$router.$avueRouter.getValue(this.$route);
      }
    },
    methods: {
      generateTitle(item) {
        return this.$router.$avueRouter.generateTitle(
          item[this.labelKey],
          (item.meta || {}).i18n
        );
      },
      vaildActive(item) {
        if (this.validIsOpen(item)) {
          return false;
        }
        const groupFlag = (item["group"] || []).some(ele =>
          this.$route.path.includes(ele)
        );
        return this.nowTagValue === item[this.pathKey] || groupFlag;
      },
      vaildRoles(item) {
        item.meta = item.meta || {};
        return item.meta.roles ? item.meta.roles.includes(this.roles) : true;
      },
      validatenull(val) {
        return validatenull(val);
      },
      validIsOpen(item) {
        if (item[this.isOpenKey] === 2 && isURL(item[this.pathKey])) {
          return true;
        }
      },
      open(item) {
        if (this.screen <= 1) this.$store.commit("SET_COLLAPSE");
        if (this.validIsOpen(item)) {
          window.open(item[this.pathKey]);
        } else {
          this.$router.$avueRouter.group = item.group;
          this.$router.$avueRouter.meta = item.meta;
          this.$router.push({
            path: this.$router.$avueRouter.getPath({
              name: item[this.labelKey],
              src: item[this.pathKey]
            }, item.meta),
            query: item.query
          });
        }
      }
    }
  };
</script>

