import React from 'react';

const Input = () => {
    return (
        <div class="input_button">
            <div className='search'>
                <i class="fa-solid fa-magnifying-glass" />
                <input type="search" placeholder="Search" class="btnSearch" />
                <button class="btns">search</button>
            </div>
            <button class="btn"><i class="fa fa-plus"></i>New Job</button>
        </div>

    )
}

export default Input;