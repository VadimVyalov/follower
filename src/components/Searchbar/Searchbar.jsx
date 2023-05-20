import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Searchbar = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div
      className="flex items-center justify-center px-6 py-3 text-[#373737] 
              bg-[#5736A3] z-50 shadow-md "
    >
      <form
        className="h-[40px] flex items-center  
                  overflow-hidden bg-[#EBD8FF] rounded-xl"
      >
        <label>
          <span
            className="mx-4 bg-[#EBD8FF]
      font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]"
          >
            Show
          </span>
          <select
            value={`${filter}`}
            onChange={onChange}
            title="Select user state"
            name="filter"
            className="inline-block w-[220px] px-1 outline-none 
                    font-semibold uppercase text-lg/[22px] text-[#373737]
                    bg-[#EBD8FF]"
          >
            <option className="bg-[#5CD3A8] " value="-1">
              All user
            </option>
            <option className="bg-[#5CD3A8]  " value="1">
              followings user
            </option>
            <option className=" bg-[#5CD3A8] " value="0">
              follow user
            </option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
