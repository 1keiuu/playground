package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
)

func handler(w http.ResponseWriter, r *http.Request) {
	dump, err := httputil.DumpRequest(r, true)
	if err != nil {
		http.Error(w, fmt.Sprint(err), http.StatusInternalServerError)
		return
	}
	fmt.Println((string(dump)))
	fmt.Fprintf(w, "<html><body>aaa</body></html>")
}

func main() {
	var httpServer http.Server
	http.HandleFunc("/", handler)
	httpServer.Addr = ":8888"
	fmt.Println("Listening on 8888")
	log.Println(httpServer.ListenAndServe())
}
