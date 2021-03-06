import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Avatar from 'comps/Avatar'
import SmallBtn from 'comps/Buttons/SmallBtn'
import CircleBtn from 'comps/Buttons/CircleBtn'
import { Link } from 'react-router-dom'

const App = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
`
const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 4px 54.3656px rgba(0, 0, 0, 0.4);
  padding-top: 5px;
`
const UpDownBtnCont = styled.div`
  margin: auto;
`
const UpBtn = styled.div`
  display: ${(props) => (props.expanded ? 'none' : 'flex')};
`
const DownBtn = styled.div`
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
`
const MarginCont = styled.div`
  margin: 20px auto 20px;
  width: 80%;
`
const AvatarCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const IdCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45px;
`
const Id = styled.div`
  font-size: 14px;
`
const Liked = styled.div`
  font-size: 12px;
  /* font-weight:bold; */
  color: #616161;
  color: #ff6666;
`
const TextCont = styled.div`
  font-size: 14px;
  margin-top: 30px;
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
  /* ${(props) => props.display && 'display:' + props.display + ';'} */
`
const CcBtnCont = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  /* top: 30px; */
  margin: 0 20px;
  height: 230px;
  justify-content: space-between;
`

const TipsForm = ({
  id,
  liked,
  title,
  text,
  icon,
  name,
  btnLiked,
  expand,
  onChange,
  onLike,
}) => {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  return (
    <App>
      <CcBtnCont>
        {/* <Link to='/MainPage'>
          <CircleBtn icon='' btnname='loginBtn' />
        </Link> */}
        <CircleBtn
          icon='icons/icon3.png'
          btnname='nextBtn'
          onClick={onChange}
        />
        <CircleBtn
          icon='icons/icon4.png'
          btnname='heartBtn'
          color='#FF5555'
          clicked={btnLiked}
          onClick={onLike}
        />
        <Link to='/PostPage'>
          <CircleBtn icon='icons/icon5.png' btnname='addBtn' />
        </Link>
      </CcBtnCont>
      <UpDownBtnCont
        onClick={() => {
          setExpanded(!expanded)
        }}
      >
        <UpBtn expanded={expanded}>
          <SmallBtn icon='icons/icon7.png' />
        </UpBtn>
        <DownBtn expanded={expanded}>
          <SmallBtn icon='icons/icon6.png' />
        </DownBtn>
      </UpDownBtnCont>
      <Container>
        <MarginCont>
          <AvatarCont>
            {/* <IdCont> */}
            <Id>{id}</Id>
            {/* </IdCont> */}
            <Liked>{liked} Liked </Liked>
            {/* <Avatar /> */}
          </AvatarCont>
          <TextCont
            expanded={expanded}
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            {title}
          </TextCont>
          <TextCont expanded={expanded}>{text}</TextCont>
        </MarginCont>
      </Container>
    </App>
  )
}

TipsForm.defaultProps = {
  id: 'Rinahan4146',
  liked: '1.4 liked',
  // icon: 'icons/icon6.png',
  text:null,
  onExpand: () => {},
  onChange: () => {},
}

export default TipsForm
