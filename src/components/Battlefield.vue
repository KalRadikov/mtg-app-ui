<template>
  <div class="row">
    <div class="col-2">
      <button class="btn btn-secondary button" @click="sort">
        To original order
      </button>
    </div>

    <div class="col-6">
      <h3>Battlefield</h3>
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <li
            class="list-group-item"
            v-for="element in list"
            :key="element.order"
          >
            <img :src="element.uri" />
          </li>
        </transition-group>
      </draggable>
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <li
            class="list-group-item"
            v-for="element in list"
            :key="element.order"
          >
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            <img :src="element.uri" />
          </li>
        </transition-group>
      </draggable>
    </div>

    <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'transition-example-2',
  display: 'Transitions',
  order: 7,
  components: {
    draggable
  },
  data() {
    return {
      list: [],
      drag: false
    }
  },
  methods: {
    ...mapActions(['fetchExampleCards']),
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order)
    }
  },
  computed: {
    ...mapGetters(['exampleCards']),
    ...mapState({
      cardList: (state) => state.exampleCards
    }),
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    cardList(newValue, oldValue) {
      console.log(oldValue)
      this.list = newValue
    }
  }
}
</script>

<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
