import { defaultTheme } from 'vuepress'
import { blogPlugin } from "vuepress-plugin-blog2";

export default  {
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
  }),
  plugins: [
    blogPlugin({
      // your options
    }),
  ],

}