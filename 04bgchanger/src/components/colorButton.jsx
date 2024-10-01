import PropTypes from 'prop-types';

const ColorButton = ({colorName, colorVal, setColor}) => {
    
  return (
    <div>
      <button
      onClick={() => setColor(colorVal)}
        className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: colorVal}}
      >{colorName}</button>
    </div>
  )
}

ColorButton.propTypes = {
    colorName: PropTypes.string.isRequired,
    colorVal: PropTypes.string.isRequired,
    setColor: PropTypes.func.isRequired
  }

export default ColorButton
