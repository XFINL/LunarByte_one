package com.music.app

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.music.app.databinding.FragmentPlayerBinding

class PlayerFragment : Fragment() {

    private var _binding: FragmentPlayerBinding? = null
    private val binding get() = _binding!!
    
    private val songs = listOf("晴天 - 周杰伦", "江南 - 林俊杰", "Love Story - Taylor Swift")
    private var currentSongIndex = 0

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentPlayerBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        updateSongDisplay()

        binding.btnLike.setOnClickListener {
            Toast.makeText(requireContext(), "已点赞", Toast.LENGTH_SHORT).show()
        }

        binding.btnDownload.setOnClickListener {
            Toast.makeText(requireContext(), "开始下载", Toast.LENGTH_SHORT).show()
        }

        binding.albumCover.setOnClickListener {
            currentSongIndex = (currentSongIndex + 1) % songs.size
            updateSongDisplay()
        }
    }

    private fun updateSongDisplay() {
        binding.songTitle.text = songs[currentSongIndex]
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
