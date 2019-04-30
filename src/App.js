import React, { Component } from 'react';
import './App.css';
import { List } from 'semantic-ui-react'

// class Item extends React.Component {
// 	render() {
//   	return <li>
//       	{ this.props.name }
//         { this.props.children }
//     </li>
//   }
// }




// export default class List2 extends React.Component {
// 	constructor() {
//   	super();
//   }
  
//   list(data) {
//   	const children = (items) => {
//     	if (items) {
//       	return <ul>{ this.list(items) }</ul>
//       }
//     }
    
//     return data.map((node, index) => {
//       return <Item key={ node.id } name={ node.name }>
//         { children(node.items) }
//       </Item>
//     })
//   }
  
//   render() {
//   	return <ul>
//     	{ this.list(this.props.data) }
//     </ul>
//   }
// }







// const ListExampleTree = () => {

//   const storage = [
// 		"EXAMPLE.COM_192.168.0.1-storages-12",
// 		"EXAMPLE.COM_192.168.0.1-storages-37",
// 		"EXAMPLE.COM_192.168.0.1-storages-41",
// 	]
	
// 	const items = storage.map((item) => {
// 		return (
// 			<List>
// 				<List.Item>
// 					<List.Icon name='folder' />
// 					<List.Content>
// 						<List.Header>{item}</List.Header>
// 						<List.Description>Source files for project</List.Description>
// 					</List.Content>
// 				</ List.Item>
// 			</List >
// 		)
//   })

//   return(
//     <ul>
//       { items }
//     </ul>
//   )
// }


		// < List >
		// <List.Item>
		//   <List.Icon name='folder' />
		//   <List.Content>
		//     <List.Header>src</List.Header>
		//     <List.Description>Source files for project</List.Description>
		//     <List.List>
		//       <List.Item>
		//         <List.Icon name='folder' />
		//         <List.Content>
		//           <List.Header>site</List.Header>
		//           <List.Description>Your site's theme</List.Description>
		//         </List.Content>
		//       </List.Item>
		//       <List.Item>
		//         <List.Icon name='folder' />
		//         <List.Content>
		//           <List.Header>themes</List.Header>
		//           <List.Description>Packaged theme files</List.Description>
		//           <List.List>
		//             <List.Item>
		//               <List.Icon name='folder' />
		//               <List.Content>
		//                 <List.Header>default</List.Header>
		//                 <List.Description>Default packaged theme</List.Description>
		//               </List.Content>
		//             </List.Item>
		//             <List.Item>
		//               <List.Icon name='folder' />
		//               <List.Content>
		//                 <List.Header>my_theme</List.Header>
		//                 <List.Description>
		//                   Packaged themes are also available in this folder
		//               </List.Description>
		//               </List.Content>
		//             </List.Item>
		//           </List.List>
		//         </List.Content>
		//       </List.Item>
		//       <List.Item>
		//         <List.Icon name='file' />
		//         <List.Content>
		//           <List.Header>theme.config</List.Header>
		//           <List.Description>Config file for setting packaged themes</List.Description>
		//         </List.Content>
		//       </List.Item>
		//     </List.List>
		//   </List.Content>
		// </List.Item>
		// <List.Item>
		//   <List.Icon name='folder' />
		//   <List.Content>
		//     <List.Header>dist</List.Header>
		//     <List.Description>Compiled CSS and JS files</List.Description>
		//     <List.List>
		//       <List.Item>
		//         <List.Icon name='folder' />
		//         <List.Content>
		//           <List.Header>components</List.Header>
		//           <List.Description>Individual component CSS and JS</List.Description>
		//         </List.Content>
		//       </List.Item>
		//     </List.List>
		//   </List.Content>
		// </List.Item>
		// <List.Item>
		//   <List.Icon name='file' />
		//   <List.Content>
		//     <List.Header>semantic.json</List.Header>
		//     <List.Description>Contains build settings for gulp</List.Description>
		//   </List.Content>
		// </List.Item>
		// </List >
 
