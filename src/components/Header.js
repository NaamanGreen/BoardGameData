import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Search
            </Link>
            <Link href="/collections" className="item">
                Collections
            </Link>
        </div>
    );
};

export default Header;