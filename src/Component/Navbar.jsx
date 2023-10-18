import React from 'react';
import './Navbar.css';
import { TbSettings2 } from 'react-icons/tb';
import { TbSquareKey } from 'react-icons/tb';
import { LuBox } from 'react-icons/lu';
import { BsPeople } from 'react-icons/bs';
import { PiMoney } from 'react-icons/pi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { TbHelpSquare } from 'react-icons/tb';
import { Bar } from 'react-chartjs-2';
import {MdOutlineNavigateNext} from 'react-icons/md';
import {LiaAllergiesSolid} from 'react-icons/lia';
import {MdOutlineArrowUpward} from 'react-icons/md';
import {MdOutlineArrowDownward} from 'react-icons/md';


import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales
} from 'chart.js';

import Piechart from './Piechart';
import Product from './Product';

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Navbar = () => {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Quaterly',
        data: [4, 3, 7, 6, 7.2, 7.6, 7.4, 6, 6, 6.6, 6.4, 5.8],
        backgroundColor: 'purple',
        borderWidth: 1,
        borderRadius: 6,
        
      }
    ]
  }
  
  const options={
    scales:{
      y:{
        beginAtZero:true,
        grid:{
          display:false
        }
      },

      x:{
        grid:{
          display:false
        }
      }

    }
  }

 

  return (
    <div className='Nav'>
      <div className='sideBar'>
        <div className='head2'>
          <TbSettings2 className="icon2" size={26} ></TbSettings2> <b> <span className='head1'>Dashboard</span>  </b>
        </div>

        <div className='navBelow'>
          <div><TbSquareKey></TbSquareKey> <span>Dashboard</span>  <MdOutlineNavigateNext className='iconNext'/></div>
          <div><LuBox></LuBox> <span>Products</span> <MdOutlineNavigateNext className='iconNext'/></div>
          <div><BsPeople></BsPeople> <span>Customers</span> <MdOutlineNavigateNext className='iconNext'/></div>
          <div><PiMoney></PiMoney><span> Income</span> <MdOutlineNavigateNext className='iconNext'/></div>
          <div><HiOutlineIdentification></HiOutlineIdentification><span>Promote</span> <MdOutlineNavigateNext className='iconNext'/></div>
          <div><TbHelpSquare></TbHelpSquare><span>Help</span><MdOutlineNavigateNext className='iconNext'/></div>
        </div>

        <div className='infoName'>
          <div>
            <img className="image1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVCD1ibnU5iRVxK-Ckd1l9gKav19z6KRyKA&usqp=CAU' alt='noImg' />
          </div>
          <div>
            <p>Evano <br />
              Project Manager</p>
          </div>
        </div>

      </div>

      <div className='rightBlock'>
        <div>
          <h4>Hello Shalini <LiaAllergiesSolid size={22}/>,</h4>

        </div>


        <div className='sideBox'>

          <div className='box1'> 
          <div>
            <img className="imageBox1" src='https://media.istockphoto.com/id/1278432471/vector/icon-of-dollar-sign-in-circle-with-two-arrow-green-usd-dollar-symbol.jpg?s=612x612&w=0&k=20&c=NxYIY7Igg4bdb3GukExNZwNqNvFFr-9NeMOY8f1sQo4=' alt='noImg' />
          </div>

          <div>
            <p><span className='text1'>Earning </span><br />
              <b>$198k</b> <br />
              <span className='text3'><span className='text2'><MdOutlineArrowUpward/>37.8k</span> this month </span></p>
          </div>
          </div>

          
          <div className='box1'>
          <div>
            <img className="imageBox2" src='https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/1/3150.9-notepad-and-pencil-icon-iconbunny.jpg' alt='noImg' />
          </div>

          <div className='contentNew'>
            <p><span className='text1'>Orders </span><br />
            <b>$2.4k</b> <br />
            <span className='text3'><span className='text2'><MdOutlineArrowDownward/>2%</span> this month </span> </p>
          </div>
          </div>

          
          <div className='box1'>
          <div>
            <img className="imageBox3" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrbZYxoz2TUeLY88lv1UNFa_hVY1725XbQwB6ZdTUuhoWNCLfsxOPAL327ji90Z4iQj4&usqp=CAU' alt='noImg' />
          </div>

          <div className='contentNew'>
            <p><span className='text1'>Balance</span> <br />
           <b>$2.4k</b>  <br />
           <span className='text3'><span className='text2'><MdOutlineArrowDownward/>2%</span> this month </span> </p>
          </div>
          </div>
          
          <div className='box1'>
          <div>
            <img className="imageBox4" src='https://static.vecteezy.com/system/resources/previews/005/232/711/original/flat-rounded-icon-of-a-shopping-bag-isolated-on-pink-background-vector.jpg' alt='noImg' />
          </div>

          <div className='contentNew'>
            <p><span className='text1'>Total Sales</span> <br />
              <b>$98k</b> <br />
              <span className='text3'><span className='text2'><MdOutlineArrowUpward/>37.8k</span> this month </span></p>
          </div>
          </div>

        </div>

        <div className="mainChart">
          
          <div className='barGraph' style={
    
            {
              width: '80%'
            }

          }>
            <h2>Overview</h2> 
            <p className='text3'>Monthly Earning</p>
            <Bar data={data}
            options={options}

            ></Bar>
          </div>

          <div className='pieChart' style={
            {
              width: '30%'
            }
          }>
           <Piechart /> 
          </div>

        </div>
        <Product/>
      </div>
          

    </div>
  )
}

export default Navbar;