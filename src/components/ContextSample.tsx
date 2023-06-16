import React from 'react'

// Titleを渡すためのContextの値を参照します
const TitleContext = React.createContext('')

const Title = () => {
  return (
    // Consumerを使って、Contextの値を参照します
    <TitleContext.Consumer>
      {/* Consumer直下に関数を書いて、Contextの値を参照します */}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      {/* HeaderからTitleへは何もデータを渡しません */}
      <Title/>
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  // Providerを使いContextに値をセットします。
  // Provider以下のコンポーネントから値を参照します。
  return (
    <TitleContext.Provider value={title}>
      <Header/>
    </TitleContext.Provider>
  )
}

export default Page;
