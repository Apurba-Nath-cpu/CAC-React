import ColorButton from "./colorButton"
import PropTypes from 'prop-types';

const BottomBar = ({setColor}) => {
  return (
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <ColorButton
              colorName="olive"
              colorVal="olive"
              setColor={setColor}
            />
            <ColorButton
              colorName="red"
              colorVal="red"
              setColor={setColor}
            />
            <ColorButton
              colorName="blue"
              colorVal="blue"
              setColor={setColor}
            />
            <ColorButton
              colorName="pink"
              colorVal="pink"
              setColor={setColor}
            />
            <ColorButton
              colorName="indigo"
              colorVal="indigo"
              setColor={setColor}
            />
          </div>
        </div>
  )
}

BottomBar.propTypes = {
  setColor: PropTypes.func.isRequired
}

export default BottomBar
