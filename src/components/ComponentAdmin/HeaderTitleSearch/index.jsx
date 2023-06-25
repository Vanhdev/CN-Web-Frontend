import { Input, Space } from "antd";
import './index.css';
import { useState } from "react";
const { Search } = Input;

function HeaderTitleSearch(props) {
    
    const {title, search, handleSearchText} = props;

    return(
        <div className="header-title-search">
            <div>{title}</div>
            {
                search && (
                    <div className="search-post">
                        <div style={{fontSize: '14px', fontWeight: '300'}}>Search</div>
                        <div>
                            <Search 
                                placeholder="Tìm kiếm ở đây" 
                                style={{width: '200px'}}
                                enterButton="Tìm"
                                onChange={(e) => handleSearchText(e.target.value)}
                                // onSearch={handleSearchButtonClick}
                            />
                        </div>
                    </div>
                )
            }
        </div>    
    )
}

export default HeaderTitleSearch;