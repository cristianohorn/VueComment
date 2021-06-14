<template>
  <div class="row justify-content-center mt-3">
    <div class="col-md-6">
      <p class="alert alert-info" v-if="comments.length <= 0">
        Sem comentários cadastrados
      </p>
      <ul class="list-group" v-else>
        <li
          v-for="(comment, i) in comments"
          :key="i"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2 me-auto">
            <div>
              Autor: <span class="fw-bold"> {{ comment.autor }}</span>
            </div>
            Comentário: <i>{{ comment.comment }}</i>
          </div>
          <button
            type="button"
            class="btn btn-sm btn-danger"
            @click="remove(i)"
          >
            <font-awesome-icon :icon="['fas', 'trash']" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      comments: (state) => state.comments,
    }),
  },
  methods: {
    ...mapMutations(["remove"]),
  },
};
</script>

<style>
</style>