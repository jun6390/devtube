import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const trimmedKeyword = searchKeyword.trim();

        if(trimmedKeyword) {
            navigate(`/search/${trimmedKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' 
                    name='searchInput' 
                    id='searchInput' 
                    autoComplete='off'
                    className='search__input'
                    placeholder='검색'
                    value={searchKeyword}
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter') {
                            handleSearch();
                        }
                    }}   
                />
            </div>
        </div>
    )
}

export default Search
