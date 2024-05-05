const Alerta = ({alerta}) => {
  return (
      <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-[#6a90a79d] to-[#002c4f]'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
          {alerta.msg}
      </div> 
  )
};

export default Alerta;
