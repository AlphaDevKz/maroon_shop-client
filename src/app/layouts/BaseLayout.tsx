import { Layout } from '../../shared/UI/layout/Layout'
import { Footer, Header } from '../../widgets'

export const BaseLayout = () => {
   return <Layout headerSlot={<Header />} bottomSlot={<Footer />} />
}
