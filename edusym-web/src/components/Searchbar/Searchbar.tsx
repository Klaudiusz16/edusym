
import { Input } from 'antd';
const { Search } = Input;

export default function Searchbar() {
    const onSearch = () => { }

    return (
        <div className='flex w-1/4'>
            <Search size='large' placeholder="Search" allowClear={true} onSearch={onSearch} enterButton />
        </div>
    )
}
