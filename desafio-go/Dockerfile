FROM golang:1.16.7-alpine3.14
COPY main.go .
RUN go build main.go
FROM scratch
COPY --from=0 /go/main .
CMD ["./main"]