<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="author" class="form-label">Autor</label>
          <input
            v-model="autor"
            type="text"
            class="form-control"
            id="author"
            placeholder="Autor"
          />
        </div>
        <div class="mb-3">
          <label for="comment" class="form-label">Comentário</label>
          <textarea
            v-model="comment"
            type="text"
            class="form-control"
            placeholder="Comentário"
          />
        </div>
        <div class="d-grid justify-content-end">
          <input
            type="button"
            value="Salvar"
            class="btn btn-success"
            @click="addComment"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      autor: "",
      comment: "",
    };
  },
  methods: {
    ...mapActions(["add"]),
    addComment() {
      if (this.autor === "" || this.comment === "") return;
      this.$store.dispatch("add", {
        autor: this.autor,
        comment: this.comment,
      });
      this.autor = "";
      this.comment = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>