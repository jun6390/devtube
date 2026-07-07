import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Not = () => {
    return (
        <Main 
            title = "페이지를 찾을 수 없습니다"
            description="요청한 페이지를 찾을 수 없습니다. 주소를 확인하거나 홈으로 이동해주세요.">
            <section id="notPage" aria-labelledby="notPageTitle">
                <h2 id="notPageTitle">페이지를 찾을 수 없습니다.</h2>
                <p>주소가 잘못되었거나 삭제된 페이지입니다.</p>
                <Link to="/">홈으로 이동</Link>
            </section>
        </Main>
    )
}

export default Not
