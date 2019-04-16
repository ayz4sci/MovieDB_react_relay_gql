import React from 'react';
import { Form, FormGroup, Button} from 'reactstrap';
import  './topbar.scss';

const TopBar = () => (
    <div className="topbar">

        <div className='topbar-content'>
            <div className="logo">
                <img src='../../../assets/images/logo.png' alt='logo' />
            </div>
            <div className='search-form'>
                <Form>
                    <FormGroup>
                        <input type='text' name='search' placeholder='search for movie, title, year '  />
                        <Button type='submit' size='sm' color='primary'>Search</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    </div>
)

export default TopBar;
