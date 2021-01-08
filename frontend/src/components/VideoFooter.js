import React from 'react'
import MusicNote from "@material-ui/icons/MusicNote";
import Ticker from 'react-ticker';
import record from '../img/record.png'
import MessageTicker from './MessageTicker';

function VideoFooter({ channel, description, messages }) {
    return (
        <div className='videofooter'>
            <div className="videofooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videofooter_ticker">
                    <div className="iconwrapper">
                        <MusicNote className='videofooter_icon' />
                    </div>
                    <div className="tickerwrapper">
                        <Ticker mode='smooth' >
                            {
                                () => (<MessageTicker messages={messages} />)
                            }
                        </Ticker>
                    </div>
                    <div className="imgwrapper">
                        <img className='videofooter_record'
                            src={record} alt="record icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
