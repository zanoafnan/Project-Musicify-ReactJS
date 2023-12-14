import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Dropdown = (props) => {
  const dropdownChanged = (selectedValue) => {
    props.changed(selectedValue);
  };

  const truncateText = (text, maxLength) => {
    if (props.selectedValue && text.length > maxLength) {
      const words = text.split(/\s+/);

      let truncatedText = '';
      let currentLength = 0;
      for (const word of words) {
        if (currentLength + word.length <= maxLength) {
          truncatedText += word + ' ';
          currentLength += word.length + 1; // Menambah 1 untuk spasi
        } else {
          break;
        }
      }

      return truncatedText.trim() + '...';
    }
    return text;
  };

  return (
    <div className="col-sm-6 form-group row px-0">
      <label className="form-label col-sm-2">{props.label}</label>
      <Menu as="div" className="relative inline-block text-left col-sm-10">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
            style={{ minWidth: '200px', maxWidth: '200px', maxHeight: '36px' }}
          >
            {truncateText(props.options.find((opt) => opt.id === props.selectedValue)?.name || 'Select...', 18)}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-[300px] max-h-60 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {props.options.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                      onClick={() => dropdownChanged(item.id)}
                    >
                      {truncateText(item.name, 50)}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
