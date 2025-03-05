


let WS = {

	getDetailsByServiceFormID(id){
		return new Promise((resolve, reject) => {
			let params = `
				<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rfid.businessaffair.xsport.bjtu.edu/">
				   <soapenv:Header/>
				   <soapenv:Body>
					  <ser:getDetailsByServiceFormID>
						 <arg0>${id}</arg0>
					  </ser:getDetailsByServiceFormID>
				   </soapenv:Body>
				</soapenv:Envelope>
			`
			$.ajax({
			  url: '/ws-api/webservice/ISendBusinessaffairDataService',
			  type: "POST",
			  timeout: 50000,
			  contentType: 'text/xml;charset=UTF-8',
			  data: params,
			  success:  (resp) =>{
				const serializer = new XMLSerializer()
				const xmlString = serializer.serializeToString(resp)
				const jsonObj = $.xml2json(xmlString);
				console.log(jsonObj )
				let result = jsonObj['soap:Envelope']['soap:Body']['ns2:getDetailsByServiceFormIDResponse']['return']
				resolve(result)
			  },
			  error:(xhr, text, x)=>{
				reject(xhr.responseText)
			  }
			})
		})
	},
	
	getCoutFormsByCoutFormID: (id)=>{
		return new Promise((resolve, reject) => {
			let params = `
				<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rfid.businessaffair.xsport.bjtu.edu/">
				   <soapenv:Header/>
				   <soapenv:Body>
					  <ser:getCoutFormsByCoutFormID>
						 <arg0>${id}</arg0>
					  </ser:getCoutFormsByCoutFormID>
				   </soapenv:Body>
				</soapenv:Envelope>
			`
			$.ajax({
			  url: '/ws-api/webservice/ISendBusinessaffairDataService',
			  type: "POST",
			  timeout: 50000,
			  contentType: 'text/xml;charset=UTF-8',
			  data: params,
			  success:  (resp) =>{
				const serializer = new XMLSerializer()
				const xmlString = serializer.serializeToString(resp)
				const jsonObj = $.xml2json(xmlString);
				console.log(jsonObj )
				let result = jsonObj['soap:Envelope']['soap:Body']['ns2:getCoutFormsByCoutFormIDResponse']['return']
				resolve(result)
			  },
			  error:(xhr, text, x)=>{
				reject(xhr.responseText)
			  }
			})
		})
	},
	
	getLoadometersByLoadometerID: (id)=>{
		return new Promise((resolve, reject) => {
			let params = `
				<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rfid.businessaffair.xsport.bjtu.edu/">
				   <soapenv:Header/>
				   <soapenv:Body>
					  <ser:getLoadometersByLoadometerID>
						 <arg0>${id}</arg0>
					  </ser:getLoadometersByLoadometerID>
				   </soapenv:Body>
				</soapenv:Envelope>
			`
			$.ajax({
			  url: '/ws-api/webservice/ISendBusinessaffairDataService',
			  type: "POST",
			  timeout: 50000,
			  contentType: 'text/xml;charset=UTF-8',
			  data: params,
			  success:  (resp) =>{
				const serializer = new XMLSerializer()
				const xmlString = serializer.serializeToString(resp)
				const jsonObj = $.xml2json(xmlString);
				let result = jsonObj['soap:Envelope']['soap:Body']['ns2:getLoadometersByLoadometerIDResponse']['return']
				resolve(result)
			  },
			  error:(xhr, text, x)=>{
				if(xhr.responseText.indexOf('soap:Fault') != -1){
					resolve(0)
				}
				reject(xhr.responseText)
			  }
			})
		})
	},
	
	getNanLCTSearchPlanByCoutid(id){
		return new Promise((resolve, reject) => {
			$.ajax({
			  url: '/gate-api/wechat/changePlan/NanLCTSearchPlanByCoutid',
			  type: "POST",
			  timeout: 50000,
			  contentType: 'application/x-www-form-urlencoded',
			  data: 'coutformid=' + id,
			  success:  (resp) =>{
				resolve(resp)
			  },
			  error:(xhr, text, x)=>{
				reject(xhr.responseText)
			  }
			})
		})
	}
	

}


async function test(){
	try{
	//	let resp = await WS.getCoutFormsByCoutFormID('BCK162400234')
		//let resp = await WS.getLoadometersByLoadometerID('BDB162400056')
		let resp = await WS.getNanLCTSearchPlanByCoutid('BCK162400234')

		console.log(resp)
		
		var serializer = new XMLSerializer();

// 将 XML DOM 对象转换为字符串
////var xmlString = serializer.serializeToString(resp)
//var jsonObj = xml2json(xmlString);

//console.log(jsonObj )
// 打印转换后的 JSON 对象
//a = jsonObj['soap:Envelope']['soap:Body']['ns2:getLoadometersByLoadometerIDResponse']['return']
//a = jsonObj['soap:Envelope']['soap:Body']['ns2:getCoutFormsByCoutFormIDResponse']['return']





console.log(a)
	}catch(e){
		console.log(e, '异常...')
	}
}

//test()



/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.transfer.xsport.bjtu.edu/">
   <soapenv:Header/>
   <soapenv:Body>
      <ser:createTransferOrderByGX>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0>0</arg0>
	<arg0>BCK161200292</arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0>333</arg0>
	<arg0></arg0>
	<arg0></arg0>
	<arg0>BGB161208051000</arg0>
	<arg0></arg0>
	<arg0>粤测333</arg0>
      </ser:createTransferOrderByGX>
   </soapenv:Body>
</soapenv:Envelope>






str[0]="lmy";// 录入人
str[1]="2024-03-04 00:11:00";// 录入时间
str[2] ="";//是否预扣
str[3] ="";//是否解扣
str[4] ="";//到验号
str[5] ="";//入库单号
str[6] ="0";//转栈类型
str[7] ="BCK161200292";//出库单号
str[8]="";//提单号
str[9]="4仓东";//转出堆位名 4仓东
str[10]="4仓西";//转入堆位名 4仓西
str[11] ="lmy";//指令编制人
str[12]="测试";//货物名称
str[13]="测试";//取料位置
str[14]="测试";//车队信息
str[15]="测试";//地磅单
str[16]="0";//计划转栈件数
str[17]="";//计划转栈重量
str[18]="N";//是否一空一重,Y/N(是:Y,否:N)
str[19]="GX11111111";//罐箱计划号
str[20]="Y";//是否过磅  Y/N(是:Y,否:N)
str[21]="CESHI";//备注
str[22]="BGB161208051000";//作业票号 
str[23]="";//作业票状态 ,0等待作业，1作业中，2作业结束
str[24]="粤测试，粤测试2";//作业票下的汽车，逗号隔开(不能为空）




*/