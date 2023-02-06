import styled from 'styled-components'

export const StyledPostNoticiaMain = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap');
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:  0 0 1.25rem 0  ;
    .documentDisplay{
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
    .button-document-div{
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    a.button-document-div{
      cursor: inherit;
    }
    .documentDisplay{
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
    .button-document{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer !important;
      padding: 20px;
      gap: 12px;
      width: 50%;
      height: 60px;
      background: #9A1A4B;
      border: 1px solid #9A1A4B;
      border-radius: 5px;
      p{
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;´
      }
    }
    @media (max-width: 769px) {
      .button-document{
        width: 100%;
        height: 100px;
        p{
          font-size: 1.1rem;
        }
      }
    }
    .btn-align-left {
      button {
        background-color: #2d2b78;
        border: none;
        border-radius: 5px;
        padding: 15px 91px;
        margin: 3px;
        font-size: 16x;
        width: 100%;
        font-family: 'Merriweather';

          a {
          text-decoration: none;
          font-family: 'Merriweather';
          color: #ffffff;
          font-family: arial;
          font-weight: 400;
          font-size: 16px;
          cursor: inherit;
        }
        }
    

  }
    
    #container-img-noticia {
        position: relative;
        width: 100%;
        height: 68.53vw;
        margin-bottom: 2.5rem;
    }

    #container-baixo-noticia {
        display: flex;
        flex-direction: column;
        padding: 2rem 1.25rem;
        width: 80%;
        pre{
          line-break: auto;
          white-space: normal;
          overflow-wrap: break-word;
          text-align: center; 
        }

        #container-header-noticia {
              display: flex;
              flex-direction: column;
              gap: 11px;
              padding:  0 0 20px 0;

              .title {
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 120%;
              }

              .subtitle {
                font-size: 14px;
                line-height: 150%;
                color: #070A0E;
              }

              .hr-line {
                height: 1px;
                width: 100%;
                background-color: #070A0E;
              }
            }


        #container-info-noticia {
            display: flex;
            flex-direction: column;
            font-family: 'Arial';
            
        }

        #conteudo-post-noticia {
            margin-bottom: 2.5rem;
            line-height: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            line-height: 2.0625rem;
            font-family: 'Arial';
   
            

              p {
                    margin: 16px 0;
                }

                h1 , h2 , h3, h4 , h5 {
                    margin: 8px 0;
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                }
                div[data-oembed-type=video] {

                   
                    iframe {
                        width: calc(100vw - 40px);
                        max-width: calc(77.1875rem - 40px);
                        width: calc(100vw - 40px);
                        height: calc(56.5vw - 22.6px);
                        max-height:  calc(43.6109375rem - 22.6px); 
                        
                    }
                    
                   
                }
        }
    }

    @media (min-width: 769px) {
        #container-img-noticia {
            height: 39.06vw;
            margin-bottom: 5rem;
        }

        #container-baixo-noticia {
            width: 100%;
            max-width: 77.1875rem;

          #container-info-noticia {
            display: flex;
            flex-direction: column;
            font-family: 'Arial';
            

            #container-header-noticia {
              display: flex;
              flex-direction: column;
              gap: 25px;
              padding:  0 0 20px 0;

              .title {
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 400;
                font-size: 48px;
                line-height: 110%;
              }

              .subtitle {
                font-size: 18px;
                line-height: 120%;
                color: #070A0E;
              }

              .hr-line {
                height: 1px;
                width: 100%;
                background-color: #070A0E;
              }
            }
        }
            


            #conteudo-post-noticia {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 1.375rem;
                line-height: 2.0625rem;
                p {
                    margin: 16px 0;
                }

                h1 , h2 , h3, h4 , h5 {
                    margin: 32px 0;
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    
                }
                div[data-oembed-type=video] {

                   
                    iframe {
                        width: calc(100vw - 40px);
                        max-width: calc(77.1875rem - 40px);
                        width: calc(100vw - 40px);
                        height: calc(56.5vw - 22.6px);
                        max-height:  calc(43.6109375rem - 22.6px); 
                        
                    }
                    
                   
                }
                
            }

        }
    }


`