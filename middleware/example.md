```ts
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id === '1') {
      return abortNavigation()
    }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    if (to.path !== '/') {
      return navigateTo('/')
    }
  })
```

Middleware runs in the following order:

  Global Middleware
  Page defined middleware order (if there are multiple middleware declared with the array syntax)

For example, assuming you have the following middleware and component:
middleware/ directory

```yaml
middleware/
--| analytics.global.ts
--| setup.global.ts
--| auth.ts
```

```vue
//pages/profile.vue
<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
});
</script>
```