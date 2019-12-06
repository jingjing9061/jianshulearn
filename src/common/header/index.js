import React, { Component }  from 'react';
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }   from './store';


class Header extends Component {
	getListArea(show){
		if (show) {
			return (
				  <SearchInfo>
				  	<SearchInfoTitle>
				  		热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
				  	</SearchInfoTitle>
				  	<SearchInfoList>
				  		<SearchInfoItem>教育</SearchInfoItem>
				  		<SearchInfoItem>读书</SearchInfoItem>
				  		<SearchInfoItem>投稿</SearchInfoItem>
				  		<SearchInfoItem>教育</SearchInfoItem>
				  	</SearchInfoList>
				  </SearchInfo>
			)
		}else{
			return null
		}
	}

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
						{this.getListArea(this.props.focused)}
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


