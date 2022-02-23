import { ListGroup } from "react-bootstrap"

const Airindex = ({weather})=>{
    return(
        <>
          <ListGroup>
                                    <ListGroup.Item variant={
                                        weather.current.air_quality['us-epa-index'] <=2 ? "success"
                                        :  weather.current.air_quality['us-epa-index'] >=3 || weather.current.air_quality['us-epa-index'] <=4 ? "warning"
                                        :"danger"
                                    }>
                                        <h5>UPA INDEX</h5> {weather.current.air_quality['us-epa-index']}

                                    </ListGroup.Item>
                                    <ListGroup.Item 
                                      variant={
                                          weather.current.air_quality['gb-defra-index']===1
                                           ? "success"
                                           
                                           : weather.current.air_quality['gb-defra-index']===2 ?
                                           "info"
                                           : weather.current.air_quality['gb-defra-index']===3 ? "primary"
                                        
                                           : weather.current.air_quality['gb-defra-index'] ===4 ?"warning"
                                           : "danger"

                                        }>

                                        <h5>GB DEFRA INDEX</h5> {weather.current.air_quality['gb-defra-index']}

                                    </ListGroup.Item>
                                </ListGroup>
        </>
    )
}

export default Airindex