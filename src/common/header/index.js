import React, { Component }  from 'react';
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }   from './store';


class Header extends Component {

	render(){
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
							in={this.props.focused}
							timeout={200}
							className="slide"
						>
						<div>
							<NavSearch 
							className={this.props.focused ? 'focused':''}
							onFocus={this.props.handleInputFocus}
							onBlur={this.props.handleInputBlur}
							></NavSearch>
						</div>
						</CSSTransition>
						<span className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe635;</span>
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
}



//state是store内所有数据
const mapStateToProps = (state)=>{
	return {
		// focused:state.header.focused//仓库的state.focused映射到focused上
		focused:state.header.get('focused')//使用immutable传数据 get()
	}
}

//store 内所有dispatch方法
const mapDispathToProps =(dispatch)=>{
	return {
		handleInputFocus(){
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur());
		}

	}
}

export default connect(mapStateToProps,mapDispathToProps)(Header);


