<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    importantLinks: [
      {
        text: "About",
        href: "/about",
      },
      {
        text: "alert",
        href: "/alert",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
      {
        text: "About",
        href: "/about",
      },
    ],
  }),
};
</script>
