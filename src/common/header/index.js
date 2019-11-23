import React  from 'react';
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

const Header = (props) =>{
	return(
		<HeaderWrapper>
			<Logo/>
			<Nav>
				<NavItem className="left active">首页</NavItem>
				<NavItem className="left ">下载App</NavItem>
				<NavItem className="right">登陆</NavItem>
				<NavItem className="right">
					<span className="iconfont">&#xe636;</span>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={props.focused}
						timeout={200}
						className="slide"
					>
					<div>
						<NavSearch 
						className={props.focused ? 'focused':''}
						onFocus={props.handleInputFocus}
						onBlur={props.handleInputBlur}
						></NavSearch>
					</div>
					</CSSTransition>
					<span className={props.focused ? 'focused iconfont':'iconfont'}>&#xe635;</span>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='writting'>
					<span className="iconfont">&#xe61d;</span>
					写文章
				</Button>
				<Button className='reg'>注册</Button>
			</Addition>
		</HeaderWrapper>
	)
}

//state是store内所有数据
const mapStateToProps = (state)=>{
	return {
		focused:state.header.focused//仓库的state.focused映射到focused上
	}
}

//store 内所有dispatch方法
const mapDispathToProps =(dispatch)=>{
	return {
		handleInputFocus(){
			const action = {
				type:'search_focus'
			}
			dispatch(action);

		},
		handleInputBlur(){
			const action ={
				type:'search_blur'
			}
			dispatch(action)
		}

	}
}

export default connect(mapStateToProps,mapDispathToProps)(Header);


