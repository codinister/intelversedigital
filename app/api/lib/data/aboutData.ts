import serverConfig from "@/state/sanity/server.config"
import { groq } from "next-sanity"

const aboutData = async () => {
  return await serverConfig.fetch(groq`
    *[_type == 'about']
    `)
}

export default aboutData