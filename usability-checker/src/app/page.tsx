import Header from "@/components/header/header";
import FirstExperiencePage from "@/pages/first-experience-page/first-experience";
import pageStyle from './page.module.css'

export default function Home() {
    return (
        <div className="relative flex min-h-svh flex-col">
          <div className="border-grid flex flex-1 flex-col">
              <header style={{ backgroundColor: "#000000" }} className="bg-black">
                  <div className={pageStyle.containerWrapper}>
                      <Header></Header>
                  </div>
              </header>
              <main className="flex flex-1 flex-col">
                  <div className={pageStyle.containerWrapper}>
                      <FirstExperiencePage></FirstExperiencePage>
                  </div>
              </main>
          </div>
        </div>
    )
}
