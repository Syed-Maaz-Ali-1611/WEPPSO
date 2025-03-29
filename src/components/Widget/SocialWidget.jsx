import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.instagram.com/weppso_?igsh=cmV3amxkZ2g4Njl0' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link to='https://www.facebook.com/share/1Wab5hviiF/?mibextid=wwXIfr' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:facebook" />               
      </Link>
      <Link to='https://wa.me/message/JWMHCLS7B6P4F1' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:whatsapp" />              
      </Link>
    </Div>
  )
}
