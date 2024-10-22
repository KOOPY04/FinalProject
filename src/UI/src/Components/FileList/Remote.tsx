import { TreeDataNode } from 'antd';
import FileTree from './FileTree';

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected remote node key:', key);
};

// 初始的遠端檔案和資料夾結構
const initialTreeData: TreeDataNode[] = [
  {
    title: '遠端根目錄',
    key: 'remoteRoot',
    children: [
      {
        title: 'documents',
        key: 'remoteDocuments',
        children: [
          {
            title: 'report.pdf',
            key: 'remoteReport',
            isLeaf: true, // 標示為檔案
          },
          {
            title: 'notes.txt',
            key: 'remoteNotes',
            isLeaf: true,
          },
        ],
      },
      {
        title: 'images',
        key: 'remoteImages',
        children: [
          {
            title: 'photo1.jpg',
            key: 'remotePhoto1',
            isLeaf: true,
          },
          {
            title: 'photo2.png',
            key: 'remotePhoto2',
            isLeaf: true,
          },
        ],
      },
      {
        title: 'downloads',
        key: 'remoteDownloads',
        children: [
          {
            title: 'installer.exe',
            key: 'remoteInstaller',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];

export default function Remote() {
  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      <FileTree onNodeSelect={handleNodeSelect} initialTreeData={initialTreeData} isLocal={false} />
    </div>
  );
}
