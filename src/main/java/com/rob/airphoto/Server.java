package com.rob.airphoto;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/")
public class Server {
	
	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public String hello(){
		return "Hello World";
	}
}
